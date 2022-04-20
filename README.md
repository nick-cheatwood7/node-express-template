# Node + Express Template

A simple launchpad for building an organized Typescript + Node JS + Express HTTP server.

## Endpoints

- `/api/v1`
  - `/healthcheck`
    - Checks the overall health of the API. Useful for checking for outages for each endpoint.
  - `/sessions`
    - Used for logging in and logging out of the API.

## Usage with Docker

#### Build an Image

```
~$ docker build -t {username}/{image-name}:{tag-name}
```

#### Login with Docker Hub

```
~$ docker login
```

#### Push to Docker Hub

```
~$  docker push {username}/{image-name}:{tag-name}
```

## Usage with Dokku

https://dokku.com/docs~v0.23.9/deployment/methods/images/#docker-image-tag-deployment
