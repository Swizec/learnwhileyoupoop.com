/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const crypto = require('crypto')
const ypi = require('youtube-playlist-info')
const YT_KEY = require('./client_secrets.json')['yt_key']
const LWyP = 'PLF8WgaD4xmjWuh7FTYTealxehOuNor_2S'

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
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

  // makeNode(lwypNode)

  return
}
