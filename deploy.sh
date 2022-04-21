#!/bin/bash

# To make executable, run `chmod +x deploy.sh`

echo What should the version be?
read VERSION
echo Enter Docker username:
read USER

docker build -t $USER/node-express-template:$VERSION .
docker push $USER/node-express-template:$VERSION

# Deploy on server (replace `root@127.0.0.1` with VPS config)
ssh root@127.0.0.1 "docker pull $USER/node-express-template:$VERSION && docker tag $USER/node-express-template:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"