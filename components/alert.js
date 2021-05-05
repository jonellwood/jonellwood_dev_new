import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-8 text-white': preview,
        'bg-accent-1 border-accent-8': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm ">
          If you got here by mistake, take it as a sign from the universe and stay a bit
          </div>
      </Container>
    </div>
  )
}
