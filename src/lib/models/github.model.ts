// Generated by json-schema-to-typescript
// Do not edit this file by hand

export interface PrivateUser {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string | null;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string | null;
	company: string | null;
	blog: string | null;
	location: string | null;
	email: string | null;
	hireable: boolean | null;
	bio: string | null;
	twitter_username: string | null;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
	private_gists: number;
	total_private_repos: number;
	owned_private_repos: number;
	disk_usage: number;
	collaborators: number;
	two_factor_authentication: boolean;
	plan: {
		collaborators: number;
		name: string;
		space: number;
		private_repos: number;
	};
	suspended_at: string | null;
	business_plus: boolean;
	ldap_dn: string;
}

export interface PublicUser {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string | null;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string | null;
	company: string | null;
	blog: string | null;
	location: string | null;
	email: string | null;
	hireable: boolean | null;
	bio: string | null;
	twitter_username: string | null;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
	plan: {
		collaborators: number;
		name: string;
		space: number;
		private_repos: number;
	};
	suspended_at: string | null;
	private_gists: number;
	total_private_repos: number;
	owned_private_repos: number;
	disk_usage: number;
	collaborators: number;
}

export type GithubUser = PrivateUser | PublicUser;

interface Actor {
	id: number;
	login: string;
	display_login: string;
	gravatar_id: string;
	url: string;
	avatar_url: string;
}

interface Repo {
	id: number;
	name: string;
	url: string;
}

interface Author {
	email: string;
	name: string;
}

interface Commit {
	sha: string;
	author: Author;
	message: string;
	distinct: boolean;
	url: string;
}

interface Payload {
	repository_id: number;
	push_id: number;
	size: number;
	distinct_size: number;
	ref: string;
	head: string;
	before: string;
	commits: Commit[];
}

export interface Event {
	id: string;
	type: string;
	actor: Actor;
	repo: Repo;
	payload: Payload;
	public: boolean;
	created_at: string;
}