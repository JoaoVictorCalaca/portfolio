import { getRepositoriesByUserName } from '@/services/githubApi/githubApiService'
import { Separator } from '@radix-ui/react-separator'
import { GitBranch } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

function Repositories() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await getRepositoriesByUserName()

        setRepos(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRepositories()
  }, [])


  return (
    <div className='flex flex-col sm:flex-row sm:flex-wrap w-full items-center justify-center gap-4'>
      {repos.map((repo) => (
        <div key={repo.id} className="hover:p-3 h-fit w-full sm:w-4/5 border-gray-200 hover:bg-gray-800 cursor-pointer rounded-md text-gray-100 duration-300 flex flex-col gap-3">
          <div className='flex items-center gap-2'>
            <GitBranch />
            <h2 className="text-lg font-semibold">{repo.name}</h2>
          </div>
          <p className="text-gray-400">{repo.description}</p>
          <Button asChild className='bg-cyan-600 hover:bg-cyan-700 w-full'>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Acessar repositório</a>
          </Button>
          <Separator className='self-center my-4' />
        </div>
      ))}
    </div>
  )
}

export default Repositories