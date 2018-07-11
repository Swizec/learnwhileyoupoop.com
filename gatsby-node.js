/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const crypto = require('crypto')
const ypi = require('youtube-playlist-info')
const YT_KEY = require('./client_secrets.json')['yt_key']
const LWyP = 'PLF8WgaD4xmjWuh7FTYTealxehOuNor_2S'

const slugify = require('slugify')
const path = require('path')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const makeNode = node => {
    node.internal.contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(node))
      .digest('hex')

    createNode(node)
  }

  const items = await ypi(YT_KEY, LWyP)

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
    children: ['lwypPlaylist'],
    internal: {
      type: 'ytPlaylists',
    },
  }

  let lwypNode = {
    id: 'lwypPlaylist',
    parent: 'ytPlaylists',
    children: [],
    internal: {
      type: 'ytPlaylist',
    },
  }

  lwypNode.children = items.map(
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
        parent: 'lwypPlaylist',
        children: [],
      })
      return id
    }
  )

  makeNode(lwypNode)
  makeNode(playlistsNode)
  makeNode(ytNode)

  return
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
              prevSlug:
                index === 0 ? null : articles[index - 1].node.fields.slug,
              nextSlug:
                index === articles.length - 1
                  ? null
                  : articles[index + 1].node.fields.slug,
            },
          })
        }
      )
      resolve()
    })
  })
}
