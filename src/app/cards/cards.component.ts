import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  textoDosCards = [
    {
        "titulo": "O Passeio Matinal",
        "conteudo": "Nas primeiras horas do dia, o sol ainda tímido desperta a cidade. Passos leves ecoam pelas ruas enquanto o mundo acorda lentamente. Cada esquina guarda uma história, cada rosto uma jornada. No horizonte, a promessa de um novo começo."
    },
    {
        "titulo": "O Café Perfumado",
        "conteudo": "O aroma do café fresco preenche a cozinha, convidando para uma pausa na correria do dia. Uma xícara fumegante entre as mãos traz conforto e inspiração. No silêncio da manhã, os primeiros goles são um deleite para a alma."
    },
    {
        "titulo": "O Livro Esquecido",
        "conteudo": "Entre prateleiras empoeiradas, um livro antigo aguarda pacientemente por mãos curiosas. Suas páginas amareladas guardam segredos de tempos passados, esperando serem desvendados por olhos sedentos por conhecimento e aventura."
    },
    {
        "titulo": "A Chuva Repentina",
        "conteudo": "Gotas gordas dançam no telhado, criando uma sinfonia suave que acalma os ânimos inquietos. O cheiro de terra molhada traz consigo memórias de infância e a promessa de renovação. Sob o guarda-chuva, sorrisos se abrem para o céu cinzento."
    },
    {
        "titulo": "A Conversa ao Entardecer",
        "conteudo": "Sentados no banco do jardim, duas almas compartilham histórias como se fossem tesouros preciosos. O sol se despede lentamente no horizonte, tingindo o céu de tons dourados. No calor da amizade, o tempo parece suspender-se, eternizando o momento."
    },
    {
        "titulo": "O Sonho Despertador",
        "conteudo": "Na fronteira entre o sono e a vigília, os sonhos desdobram-se em cenas surreais e fantásticas. O despertador interrompe a narrativa, trazendo de volta à realidade. Mas as lembranças do mundo onírico persistem, sussurrando promessas de aventuras sem fim."
    },
    {
        "titulo": "A Noite Estrelada",
        "conteudo": "Sob o manto negro do céu, as estrelas cintilam como diamantes preciosos. O universo revela sua imensidão, fazendo-nos sentir pequenos e conectados ao mesmo tempo. No silêncio da noite, contemplamos a beleza infinita do cosmos."
    },
    {
        "titulo": "O Sorriso Cúmplice",
        "conteudo": "Em meio à multidão, um olhar encontra o outro e um sorriso nasce, desafiando o caos ao redor. Por um instante, o tempo parece congelar, deixando espaço apenas para a intimidade compartilhada entre duas almas afins."
    },
    {
        "titulo": "A Canção da Primavera",
        "conteudo": "No ar fresco da manhã, os pássaros entoam uma sinfonia de boas-vindas à estação das flores. Os botões começam a desabrochar, tingindo o mundo com cores vibrantes e perfumes delicados. A natureza desperta para mais um ciclo de renovação e vida."
    },
    {
        "titulo": "O Abraço Reconfortante",
        "conteudo": "Em meio às adversidades da vida, um abraço sincero é o refúgio que acalma a alma. Nos braços do outro, encontramos força para enfrentar tempestades e celebrar as pequenas alegrias. É o gesto simples que nos lembra que não estamos sozinhos nesta jornada."
    }
]

  
  ngOnInit(): void {
    
  }
  
}
