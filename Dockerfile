FROM cypress/included:latest
ENV CYPRESS_VIDEO=false
ENV CYPRESS_headless=true
WORKDIR /e2e
COPY cypress-automation-framework/  /e2e/
