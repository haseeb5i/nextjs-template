export const launchesQueryDocument = /* GraphQL */ `
  query Launches($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      links {
        mission_patch_small
        mission_patch
      }
      launch_year
      rocket {
        rocket_name
      }
      id
    }
  }
`;
