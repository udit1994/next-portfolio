const GITHUB_API = 'https://api.github.com';

/**
 * Get a repository's information with the GitHub API.
 *
 * @param repository - The repository to get.
 */
export async function getRepository(repository) {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${repository}`, {
      headers: {
        Authorization: `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
        'access-Control-Allow-Origin': '*',
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`There was an error while fetching "${repository}".`);
      }

      return response.json();
    });

    return {
      created: response.created_at,
      updated: response.updated_at,
      pushed: response.pushed_at,
      forks: response.forks_count,
      issues: response.open_issues_count,
      stars: response.stargazers_count,
      watchers: response.watchers_count,
    };
  } catch (error) {
    console.error(error);

    return;
  }
}
