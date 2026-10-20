import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/list/gestures')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/list/gestures"!</div>
}
