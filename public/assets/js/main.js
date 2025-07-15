// Script para enviar formulário por email
document.getElementById('form-orcamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = encodeURIComponent(document.getElementById('nome').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const telefone = encodeURIComponent(document.getElementById('telefone').value);
    const tamanho = encodeURIComponent(document.getElementById('tamanho').value);
    const local = encodeURIComponent(document.getElementById('local').value);
    const descricao = encodeURIComponent(document.getElementById('descricao').value);
    const referencia = encodeURIComponent(document.getElementById('referencia').value);
    
    const assunto = "Solicitação de Orçamento - " + nome;
    const corpo = `Nome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0A%0ATamanho: ${tamanho}%0ALocal: ${local}%0A%0ADescrição:%0A${descricao}%0A%0AReferência:%0A${referencia}`;
    
    window.location.href = `mailto:studio@rtgtattoo.com.br?subject=${assunto}&body=${corpo}`;
    
    // Feedback visual
    const btn = this.querySelector('button');
    btn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Solicitação';
        btn.disabled = false;
    }, 3000);
});

// Menu mobile toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
});