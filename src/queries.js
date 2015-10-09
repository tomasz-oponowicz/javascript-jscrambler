export function getApplication (applicationId) {
  return {
    query: `
      query getApplication ($applicationId: String!) {
        application(_id: $applicationId) {
          _id,
          name,
          createdAt,
          sources {
            _id,
            filename,
            extension
          }
        }
      }
    `,
    params: JSON.stringify({
      applicationId
    })
  };
}
