<script>
    import { onMount } from 'svelte'
    import FrontPage from './pages/FrontPage.svelte'
    import LoginPage from './pages/LoginPage.svelte'
    import { Router, Route } from 'svelte-navigator'
    import { BASE_URL } from '../server.config.js'

    let isAuthenticated = false

    onMount(async () => {
        await fetch(`${BASE_URL}/session`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => isAuthenticated = data.isAuthenticated)
            .catch(error => console.log(error))
    })
</script>

<Router>
    <Route path="/" component={LoginPage}/>
    {#if isAuthenticated}
        <Route path="/frontpage" component={FrontPage}/>
    {:else}
        <Route path="/frontpage" component={LoginPage}/>
    {/if}
</Router>
