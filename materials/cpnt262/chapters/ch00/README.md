# CPNT 262: Day 0 - Environment Setup
## Questions to ask
- Who's using their own laptop?
  - Mac, Windows or Linux?
- Who is working on the workstations?
  - Do you have a system to work on at home?

## Overview: Development Environments

## Options for running NodeJS locally (in order of preference)
1. Docker
2. Vagrant
3. [Install NodeJS directly](https://nodejs.org/en/download/)

## Option 1: Docker
Install the following software. If one is already installed, check the version and compare it to the latest stable release. Ask you instructor before you update/upgrade.
- Docker for Desktop
  - [Windows 10](https://docs.docker.com/docker-for-windows/install/)
  - [MacOS](https://docs.docker.com/docker-for-mac/install/)

### Setup Docker Container
See: [Traversy Docker Cheatsheet](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3)
1. Pull the latest version of the [program repo](https://github.com/acidtone/wbdv-winter-2020)
2. Using Git Bash or similar command line interface to navigate to `/materials/cpnt262/app`
4. Use `ls` to confirm you see the following files
    - `Dockerfile`
    - `docker-compose.yml`
5. `$ docker-compose up`
6. *cross fingers*
7. If once docker is finished creating an image and container, try connecting to the container via ssh:
    - `$ docker exec -it <mycontainer> bash`
    - if successful, you should see a different command line prompt

### Working with Containers
See: Traversy Docker Cheatsheet
- [list running containers](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3#list-running-containers)
- [Docker Compose](https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3#docker-compose)