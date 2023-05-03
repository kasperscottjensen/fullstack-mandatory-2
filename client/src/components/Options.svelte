<script>
    import Modal from './Modal.svelte'
    import Signup from './Signup.svelte'
    import ForgotPassword from './ForgotPassword.svelte'

    let showModalSignUp = false
    let showModalPassword = false

    function closeFromChild() {
        showModalSignUp = false
        showModalPassword = false
    }

    function toggleModalSignUp() {
        showModalSignUp = true
    }

    function toggleModalPassword() {
        showModalPassword = true
    }
</script>

<div class="container-fluid d-flex justify-content-center">
    <ul class="list-unstyled">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={toggleModalSignUp} class="float-start text-danger">Sign Up</li>
        <li class="float-start text-white px-3">|</li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={toggleModalPassword} class="float-start text-danger">Forgot Password ?</li>
    </ul>
</div>

<Modal isOpen={showModalSignUp} title="Sign Up">
    <div slot="content">
        <Signup closeFromChild={closeFromChild}/>
    </div>
</Modal>

<Modal isOpen={showModalPassword} title="Forgot Password ?">
    <div slot="content">
        <ForgotPassword closeFromChild={closeFromChild}/>
    </div>
</Modal>
