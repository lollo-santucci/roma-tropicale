import { Octokit } from "@octokit/rest";

type Config = {
  owner: string;
  repo: string;
  branch: string;
  token: string;
};

function loadConfig(): Config {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  const token = process.env.GITHUB_TOKEN;
  if (!owner || !repo || !token) {
    throw new Error(
      "Missing GitHub env vars: GITHUB_OWNER, GITHUB_REPO, GITHUB_TOKEN"
    );
  }
  return { owner, repo, branch, token };
}

function client(): { kit: Octokit; config: Config } {
  const config = loadConfig();
  return { kit: new Octokit({ auth: config.token }), config };
}

export async function getFileSha(path: string): Promise<string | null> {
  const { kit, config } = client();
  try {
    const res = await kit.repos.getContent({
      owner: config.owner,
      repo: config.repo,
      ref: config.branch,
      path,
    });
    if (Array.isArray(res.data) || res.data.type !== "file") return null;
    return res.data.sha;
  } catch (e) {
    const status = (e as { status?: number }).status;
    if (status === 404) return null;
    throw e;
  }
}

export async function commitFile(
  path: string,
  content: string,
  message: string
): Promise<{ sha: string; commitSha: string }> {
  const { kit, config } = client();
  const sha = await getFileSha(path);
  const res = await kit.repos.createOrUpdateFileContents({
    owner: config.owner,
    repo: config.repo,
    branch: config.branch,
    path,
    message,
    content: Buffer.from(content, "utf8").toString("base64"),
    sha: sha || undefined,
  });
  return {
    sha: res.data.content?.sha || "",
    commitSha: res.data.commit.sha || "",
  };
}

export async function commitBinary(
  path: string,
  base64: string,
  message: string
): Promise<{ sha: string; commitSha: string }> {
  const { kit, config } = client();
  const sha = await getFileSha(path);
  const res = await kit.repos.createOrUpdateFileContents({
    owner: config.owner,
    repo: config.repo,
    branch: config.branch,
    path,
    message,
    content: base64,
    sha: sha || undefined,
  });
  return {
    sha: res.data.content?.sha || "",
    commitSha: res.data.commit.sha || "",
  };
}
