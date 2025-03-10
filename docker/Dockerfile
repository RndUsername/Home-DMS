FROM node:20-alpine AS build
ARG PB_VERSION=0.24.4

RUN apk add --no-cache \
    unzip

# checkout repo
ADD https://github.com/RndUsername/Home-DMS.git /home-dms/
WORKDIR /home-dms

# download PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip pb.zip

# build
RUN unzip pb.zip -d pocketbase/ && \
    pocketbase/pocketbase migrate && \
    npm i && \
    npm run build && \
    mv dist/public pocketbase/pb_public


FROM scratch
COPY --from=build /home-dms/pocketbase /home-dms
EXPOSE 8090

# start PocketBase
CMD ["/home-dms/pocketbase", "serve", "--http=0.0.0.0:8090"]