import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('./Home'))

export default () => (
    <Suspense fallback={<div>Loading</div>}>
        <Home />
    </Suspense>
)
