<script>
    import { BASE_URL } from '../../server.config'
    import toastr from 'toastr'

    toastr.success('Login successful!')

    async function handleSubmit(event) {
        event.preventDefault()
        await fetch(`${BASE_URL}/logout`)
            .then(() => window.location.href='/')
            .catch(error => console.log(error))
    }
</script>

<h3 class="text-white">Hello from FrontPage.svelte</h3>
<button on:click={handleSubmit} class="btn btn-danger px-3 py-2 mt-2">Logout</button>
