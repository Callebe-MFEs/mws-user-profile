FROM nginx:1.23.3-alpine as build

LABEL name="mws-user-profile" \
      description="My Workspace User profile Micro-Frontend application using angular, module federation and Single-SPA"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "mws-user-profile: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./dist .

USER nginx
