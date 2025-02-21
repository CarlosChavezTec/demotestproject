import './TwitterFollowCard.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'carloschavez',
    name: 'Carlos C.',
    isFollowing: true
  },
  {
    userName: 'andresoviedo',
    name: 'Pablo O.',
    isFollowing: false
  },
  {
    userName: 'jochoarteaga',
    name: 'Jocho A.',
    isFollowing: true
  },
  {
    userName: 'erickwendel',
    name: 'Erick W.',
    isFollowing: false
  }
]

export const Pruebados = () => {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
