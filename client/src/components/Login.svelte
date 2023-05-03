<script>
    import { BASE_URL } from '../../server.config.js'

    async function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            body: formData,
        })
        .then(() => window.location.href='/frontpage')
        .catch((error) => {
            console.log(error)
        })
    }
</script>

<div class="container-fluid d-flex justify-content-center mb-4">
    <form class="w-100" on:submit={handleSubmit}>
        <div class="form-outline pb-4">
            <input type="email" name="email" class="form-control" placeholder="Email" required/>
        </div>
        <div class="form-outline pb-3">
            <input type="password" name="password" class="form-control" placeholder="Password" required/>
        </div>
        <button type="submit" class="btn btn-danger px-3 py-2 mt-2">Login</button>
    </form>
</div>
