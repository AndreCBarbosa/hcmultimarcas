/**
 * HC Multimarcas - Sistema de Autenticação Simples
 */

function checkAuth() {
    // Verifica se o administrador está logado no localStorage
    const isAdmin = localStorage.getItem('hc_admin_auth') === 'true';
    
    // Seleciona todos os elementos que devem ser vistos apenas por admin
    const adminElements = document.querySelectorAll('.admin-only');

    if (isAdmin) {
        adminElements.forEach(el => {
            el.classList.remove('d-none');
            // Garante que itens de lista mantenham o display correto do Bootstrap
            if(el.tagName === 'LI') el.style.display = 'block';
        });
    } else {
        adminElements.forEach(el => el.classList.add('d-none'));
    }
}

function logout() {
    // Remove a credencial e recarrega para limpar o menu
    localStorage.removeItem('hc_admin_auth');
    window.location.href = 'index.html'; // Redireciona para a home
}

// Executa a verificação sempre que a página carregar
document.addEventListener('DOMContentLoaded', checkAuth);
