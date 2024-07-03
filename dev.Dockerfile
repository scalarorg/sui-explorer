# FROM arm64v8/node:18.20-bookworm
FROM arm64v8/node:20.12.2-bookworm
RUN apt-get update && apt-get install -y git
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
RUN cp /root/.local/share/pnpm/pnpm /usr/local/bin
