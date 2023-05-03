<script>
    import { BASE_URL } from '../../server.config.js'
    import toastr from 'toastr'

    export let closeFromChild

    async function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        await fetch(`${BASE_URL}/forgotpassword`, {
            method: 'POST',
            body: formData
        })
        .then(() => {
            closeFromChild()
        })
        .then(() => {
            toastr.success('Email sent!')
        })
    }
</script>

<div class="py-4 px-5">
    <p class="lh-1">Please enter your email.</p>
    <p class="lh-1">You will recieve your password in your inbox.</p>
</div>
<div>
    <form class="w-100" on:submit={handleSubmit}>
        <div class="form-outline pb-4">
            <input type="email" name="email" class="form-control" placeholder="Email" required/>
        </div>
        <button type="submit" class="btn btn-danger px-3 py-2 mb-3">Send</button>
    </form>
</div>
