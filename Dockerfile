#
# MIT License
#
# Copyright (c) 2018 Robert Burrell Donkin (https://github.com/itstechupnorth/)
#
#    Permission is hereby granted, free of charge, to any person obtaining a
#    copy of this software and associated documentation files (the "Software"),
#    to deal in the Software without restriction, including without limitation
#    the rights to use, copy, modify, merge, publish, distribute, sublicense,
#    and/or sell copies of the Software, and to permit persons to whom the
#    Software is furnished to do so, subject to the following conditions:
#
#    The above copyright notice and this permission notice shall be included in
#    all copies or substantial portions of the Software.
#
#    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
#    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
#    DEALINGS IN THE SOFTWARE.
#
# Code adapted from: https://github.com/itstechupnorth/docker-for-gatsby


##################
### HOW TO USE ###
##################

# To build locally:
# docker build -t prod --build-arg YT_KEY="your_key_here" .

# To run without docker, set up `now-secrets.json` with your youtube API key:
# cp now-secrets-example.json now-secrets.json
# vi now-secrets.json
# then `yarn develop` and `yarn build` as usual.

# To inspect:
# docker run -d --name lwyp prod
# rm -rf ./public
# docker cp lwyp:/public ./
# gatsby serve

# SETUP INSTRUCTIONS FOR NOW DEPLOYMENT
# Configure secret
# now secrets add lwyp-yt-key "your youtube api key"

# Then deploy
# now

###################
### /HOW TO USE ###
###################

FROM alpine:3.7

# Set application home
WORKDIR /usr/app

# Aim is developer so install Bash
RUN apk add --no-cache bash

# Gatsby installed by npm
RUN apk add --no-cache nodejs-npm

# install Python, used by many image plugins
RUN apk add --no-cache python make g++

# install image processing library used by image plugins
RUN apk add vips-dev fftw-dev --no-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/

# https://github.com/npm/uid-number/issues/3#issuecomment-287413039
RUN npm config set unsafe-perm true

# install yarn and gatsby
RUN npm install --global yarn gatsby-cli

COPY yarn.lock package.json ./
RUN yarn
COPY . .

ARG YT_KEY
RUN yarn build
RUN mv public /public