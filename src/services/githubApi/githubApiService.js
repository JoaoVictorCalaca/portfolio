import axios from "axios";

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USER_NAME = 'joaovictorcalaca';

export const getRepositoriesByUserName = async () => {
  try {
    const resp = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USER_NAME}/repos`);

    return resp.data;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error.message);
    throw new Error('Failed to fetch repositories');
  }
}