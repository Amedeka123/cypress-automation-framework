FROM cypress/included:latest
ENV CYPRESS_VIDEO=false
ENV CYPRESS_headless=true
WORKDIR /e2e
COPY cypress/ /e2e
# Run the Cypress tests
CMD ["npm", "run", "triggerAllTests-autostore-dashboard"]
