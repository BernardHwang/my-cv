import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@heroui/react';
import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
  };
  private: boolean;
  html_url: string;
  description?: string; // Optional since some repos might not have a description
  fork: boolean;
  url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  visibility: "public" | "private";
  created_at: string;
  updated_at: string;
  pushed_at: string;
  default_branch: string;
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  permissions: {
    admin: boolean;
    push: boolean;
    pull: boolean;
  };
}

export const Projects = () => {
  const [gitRepos, setGitRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const getGitRepos = async () => {
      try {
        const octokit = new Octokit({
          auth: process.env.GITHUB_API_TOKEN
        });
  
        const response = await octokit.request('GET /users/{username}/repos', {
          username: 'BernardHwang',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
  
        setGitRepos(response.data);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      }
    };

    getGitRepos();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 text-white py-10">
      <h2 className="text-4xl font-bold mb-6">
        My <span className="text-purple-400 font-semibold">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-48">
        {gitRepos.map((repo, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 hover:bg-gray-700 transition rounded-lg shadow-lg"
          >
            <CardHeader className="text-lg font-semibold text-purple-400 h-2/5">{repo.name}</CardHeader>
            <Divider />
            <CardBody>
              <p className="text-xs italic h-2/5">{repo.description ?? "No Description"}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link href={repo.html_url} isExternal showAnchorIcon target="_blank" className="text-xs italic text-blue-400 hover:underline">
                Visit source code on GitHub
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};