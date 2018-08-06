/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('now-env')
const crypto = require('crypto')
const ypi = require('youtube-playlist-info')
const YT_KEY = process.env['YT_KEY']
const playlistIds = {
  react: 'PLF8WgaD4xmjWuh7FTYTealxehOuNor_2S',
  state: 'PLF8WgaD4xmjUwRQMfDtGjJ1_UhOVMTjR9',
}

const slugify = require('slugify')
const path = require('path')

if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}

exports.sourceNodes = ({ actions }) => {
  const { createNode } = actions
  const makeNode = node => {
    node.internal.contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(node))
      .digest('hex')

    createNode(node)
  }

  let ytNode = {
    id: 'youtube',
    children: ['ytPlaylists'],
    parent: null,
    internal: {
      type: 'youtube',
    },
  }

  let playlistsNode = {
    id: 'ytPlaylists',
    parent: 'youtube',
    children: [],
    internal: {
      type: 'ytPlaylists',
    },
  }

  const basePlaylistNode = ([playlistKey, playlistId]) => ({
    id: `ytPlaylist-${playlistId}`,
    playlistKey: playlistKey,
    playlistId: playlistId,
    parent: 'ytPlaylists',
    children: [],
    internal: {
      type: 'ytPlaylist',
    },
  })

  return Promise.all(
    Object.entries(playlistIds).map(async ([playlistKey, playlistId]) => {
      const items = await ypi(YT_KEY, playlistId)
      const playlistNode = basePlaylistNode([playlistKey, playlistId])

      playlistNode.children = items.map(
        ({ title, description, resourceId, thumbnails, position }) => {
          const id = `ytVideo-${resourceId.videoId}`
          makeNode({
            id,

            title,
            description,
            thumbnails,
            position,
            resourceId,
            videoId: resourceId.videoId,
            internal: {
              type: 'ytVideo',
            },
            parent: playlistNode.id,
            children: [],
          })
          return id
        }
      )

      makeNode(playlistNode)
      return playlistNode.id
    })
  ).then(playlistNodeIds => {
    playlistsNode.children = playlistNodeIds
    makeNode(playlistsNode)
    makeNode(ytNode)
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const slug =
      fileNode.relativeDirectory +
      '/' +
      slugify(node.frontmatter.title, { lower: true })

    actions.createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: ASC }) {
          edges {
            node {
              frontmatter {
                title
                videoId
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(
        ({ node }, index, articles) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/article.js'),
            context: {
              slug: node.fields.slug,
              videoId: node.frontmatter.videoId,
              prevSlug:
                articles[index - 1] && articles[index - 1].node.fields.slug,
              nextSlug:
                articles[index + 1] && articles[index + 1].node.fields.slug,
              prevTitle:
                articles[index - 1] &&
                articles[index - 1].node.frontmatter.title,
              nextTitle:
                articles[index + 1] &&
                articles[index + 1].node.frontmatter.title,
            },
          })
        }
      )
      resolve()
    })
  })
}
