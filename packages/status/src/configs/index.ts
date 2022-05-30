export enum Service {
  ATLASSIAN = 'Atlassian',
  BIT_BUCKET = 'Bitbucket',
  CIRCLE_CI = 'Circle CI',
  CONFLUENCE = 'Confluence',
  DISCORD = 'Discord',
  GIT_HUB = 'GitHub',
  HEDERA = 'Hedera',
  JIRA_SOFTWARE = 'Jira Software',
  SOLANA = 'Solana',
  TRELLO = 'Trello',
  VERCEL = 'Vercel',
}

export enum ServiceAPI {
  ATLASSIAN = 'https://status.atlassian.com/api/v2/status.json',
  BIT_BUCKET = 'https://bitbucket.status.atlassian.com/api/v2/status.json',
  CIRCLE_CI = 'https://status.circleci.com/api/v2/status.json',
  CONFLUENCE = 'https://confluence.status.atlassian.com/api/v2/status.json',
  DISCORD = 'https://discordstatus.com/api/v2/status.json',
  GIT_HUB = 'https://www.githubstatus.com/api/v2/status.json',
  HEDERA = 'https://status.hedera.com/api/v2/status.json',
  JIRA_SOFTWARE = 'https://jira-software.status.atlassian.com/api/v2/status.json',
  SOLANA = 'https://status.solana.com/api/v2/status.json',
  TRELLO = 'https://trello.status.atlassian.com/api/v2/status.json',
  VERCEL = 'https://www.vercel-status.com/api/v2/status.json',
}
