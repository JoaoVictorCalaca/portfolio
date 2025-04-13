import { getRepositoriesByUserName } from '@/services/githubApi/githubApiService'
import { Separator } from '@radix-ui/react-separator'
import { SquareArrowOutUpRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

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
    <div className='flex flex-col sm:flex-row sm:flex-wrap w-full gap-4'>
      {repos.map((repo) => (
        <div key={repo.id} className="hover:p-3 h-fit w-full sm:w-4/5 border-gray-200 hover:bg-gray-800 cursor-pointer rounded-md text-gray-100 duration-300 flex flex-col gap-3">
          <div className='flex items-center gap-2 text-cyan-500'>
            <a className='text-xl' href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            <SquareArrowOutUpRight />
          </div>
          <p className="text-gray-400">{repo.description}</p>
          <Separator className='self-center my-4' />
        </div>
      ))}
    </div>
  )
}

export default Repositories