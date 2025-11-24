import { Law, LawCategory, SeizureStatus } from './types';

export const LAWS_DATA: Law[] = [
  // --- INFRAÇÕES DE TRÂNSITO (Novas e Antigas) ---
  {
    id: 't-1',
    title: 'Dirigir sob Efeito de Álcool',
    category: LawCategory.TRAFFIC,
    fine: 7500,
    jailTime: 30,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-2',
    title: 'Estacionar em Vaga Proibida',
    category: LawCategory.TRAFFIC,
    fine: 1500,
    seizure: SeizureStatus.MAYBE
  },
  {
    id: 't-new-1',
    title: 'Excesso de Velocidade (+8)',
    category: LawCategory.TRAFFIC,
    fine: 1000,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-2',
    title: 'Excesso de Velocidade (+20)',
    category: LawCategory.TRAFFIC,
    fine: 1500,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-3',
    title: 'Avançar Sinal Vermelho',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 0,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-4',
    title: 'Conversão em U Proibida',
    category: LawCategory.TRAFFIC,
    fine: 750,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-5',
    title: 'Estacionar em Local Proibido',
    category: LawCategory.TRAFFIC,
    fine: 600,
    jailTime: 0,
    seizure: SeizureStatus.MAYBE
  },
  {
    id: 't-new-6',
    title: 'Dirigir Sob Efeito de Álcool (Nível 2)',
    category: LawCategory.TRAFFIC,
    fine: 5000,
    jailTime: 15,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-7',
    title: 'Direção Perigosa',
    category: LawCategory.TRAFFIC,
    fine: 3500,
    jailTime: 12,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-8',
    title: 'Não Dar Preferência ao Pedestre',
    category: LawCategory.TRAFFIC,
    fine: 1000,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-9',
    title: 'Dirigir Sem Carteira de Motorista',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 0,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-10',
    title: 'Registro de Veículo Vencido',
    category: LawCategory.TRAFFIC,
    fine: 750,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-11',
    title: 'Dirigir Sem Cinto de Segurança',
    category: LawCategory.TRAFFIC,
    fine: 600,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-12',
    title: 'Não Parar no Sinal de Pare',
    category: LawCategory.TRAFFIC,
    fine: 1500,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-13',
    title: 'Mudança de Faixa Perigosa',
    category: LawCategory.TRAFFIC,
    fine: 1250,
    jailTime: 0,
    seizure: SeizureStatus.MAYBE
  },
  {
    id: 't-new-14',
    title: 'Dirigir pelo acostamento',
    category: LawCategory.TRAFFIC,
    fine: 1000,
    jailTime: 0,
    seizure: SeizureStatus.MAYBE
  },
  {
    id: 't-new-15',
    title: 'Seguir Muito Perto do Veículo à Frente',
    category: LawCategory.TRAFFIC,
    fine: 900,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-16',
    title: 'Dirigir Sem Faróis à Noite',
    category: LawCategory.TRAFFIC,
    fine: 750,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-17',
    title: 'Exceder Velocidade em Zona Escolar',
    category: LawCategory.TRAFFIC,
    fine: 3250,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-18',
    title: 'Estacionar em Vaga de Deficiente',
    category: LawCategory.TRAFFIC,
    fine: 1000,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-19',
    title: 'Dirigir com Luz Traseira Quebrada',
    category: LawCategory.TRAFFIC,
    fine: 600,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-20',
    title: 'Ultrapassar Linha Amarela Dupla',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 10,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-21',
    title: 'Não Sinalizar a Conversão',
    category: LawCategory.TRAFFIC,
    fine: 750,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-22',
    title: 'Dirigir Sem Seguro',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 5,
    note: '(NAO ESTA FUNCIONANDO)',
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-23',
    title: 'Bloquear Cruzamento',
    category: LawCategory.TRAFFIC,
    fine: 1000,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-24',
    title: 'Ultrapassagem Perigosa',
    category: LawCategory.TRAFFIC,
    fine: 2000,
    jailTime: 5,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-25',
    title: 'Avançar Sinal Vermelho Piscante em Ferrovia',
    category: LawCategory.TRAFFIC,
    fine: 3500,
    jailTime: 12,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-26',
    title: 'Dirigir com Visão Obstruída',
    category: LawCategory.TRAFFIC,
    fine: 900,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-27',
    title: 'Não Parar para Ônibus Escolar',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 5,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-28',
    title: 'Dirigir Sem Luz de Freio',
    category: LawCategory.TRAFFIC,
    fine: 750,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-29',
    title: 'Ultrapassagem no Acostamento',
    category: LawCategory.TRAFFIC,
    fine: 2000,
    jailTime: 10,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-30',
    title: 'Não Obedecer Policial de Trânsito',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 12,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-31',
    title: 'Estacionar em Hidrante',
    category: LawCategory.TRAFFIC,
    fine: 1000,
    jailTime: 0,
    seizure: SeizureStatus.MAYBE
  },
  {
    id: 't-new-32',
    title: 'Bloquear Faixa de Pedestre',
    category: LawCategory.TRAFFIC,
    fine: 750,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-33',
    title: 'Não Usar Sinal de Conversão',
    category: LawCategory.TRAFFIC,
    fine: 600,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-34',
    title: 'Conversão à Esquerda Proibida',
    category: LawCategory.TRAFFIC,
    fine: 1250,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-35',
    title: 'Dirigir Sem Espelhos',
    category: LawCategory.TRAFFIC,
    fine: 900,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-36',
    title: 'Exceder Peso Máximo Permitido',
    category: LawCategory.TRAFFIC,
    fine: 3500,
    jailTime: 12,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-37',
    title: 'Não Dar Preferência ao Entrar na Rodovia',
    category: LawCategory.TRAFFIC,
    fine: 1750,
    jailTime: 5,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-38',
    title: 'Cruzar o Meio-Fio',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 10,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-39',
    title: 'Não Diminuir Luz Alta',
    category: LawCategory.TRAFFIC,
    fine: 600,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-40',
    title: 'Obstruir Trânsito',
    category: LawCategory.TRAFFIC,
    fine: 1250,
    jailTime: 3,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-41',
    title: 'Dirigir com Freios Inoperantes',
    category: LawCategory.TRAFFIC,
    fine: 2500,
    jailTime: 10,
    seizure: SeizureStatus.YES
  },
  {
    id: 't-new-42',
    title: 'Uso Indevido da Buzina',
    category: LawCategory.TRAFFIC,
    fine: '600+',
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-43',
    title: 'Dirigir Muito Devagar na Rodovia',
    category: LawCategory.TRAFFIC,
    fine: 750,
    jailTime: 0,
    note: '(20kmh-)',
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-44',
    title: 'Estacionar em Frente à Entrada de Garagem',
    category: LawCategory.TRAFFIC,
    fine: 600,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-45',
    title: 'Pneus em Más Condições',
    category: LawCategory.TRAFFIC,
    fine: 900,
    jailTime: 0,
    seizure: SeizureStatus.NO
  },
  {
    id: 't-new-46',
    title: 'Pneus Impróprios em pista publica (drift...)',
    category: LawCategory.TRAFFIC,
    fine: 1000,
    jailTime: 5,
    seizure: SeizureStatus.YES
  },

  // --- CRIMES CONTRA PESSOAS ---
  {
    id: 'p-1',
    title: 'Sequestro',
    category: LawCategory.PEOPLE,
    fine: 25000,
    jailTime: 60,
    seizure: SeizureStatus.NO
  },
  {
    id: 'p-2',
    title: 'Ameaça',
    category: LawCategory.PEOPLE,
    fine: 5000,
    jailTime: 10,
    seizure: SeizureStatus.NO
  },
  // --- NOVOS CRIMES CONTRA PESSOAS ---
  { id: 'p-new-1', title: 'Agressão Simples', category: LawCategory.PEOPLE, fine: 750, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-2', title: 'Agressão Leve', category: LawCategory.PEOPLE, fine: 600, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'p-new-3', title: 'Agressão Moderada', category: LawCategory.PEOPLE, fine: 1250, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-4', title: 'Agressão Grave', category: LawCategory.PEOPLE, fine: 2000, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-5', title: 'Briga de Rua', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-6', title: 'Espancamento', category: LawCategory.PEOPLE, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-7', title: 'Tentativa de Espancamento', category: LawCategory.PEOPLE, fine: 1750, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-8', title: 'Ameaça Simples', category: LawCategory.PEOPLE, fine: 500, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'p-new-9', title: 'Ameaça Grave', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-10', title: 'Ameaça com Arma', category: LawCategory.PEOPLE, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-11', title: 'Lesão Corporal Leve', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-12', title: 'Lesão Corporal Moderada', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-13', title: 'Lesão Corporal Grave', category: LawCategory.PEOPLE, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-14', title: 'Violência Doméstica Leve', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-15', title: 'Violência Doméstica Moderada', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-16', title: 'Violência Doméstica Grave', category: LawCategory.PEOPLE, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-17', title: 'Tentativa de Sequestro', category: LawCategory.PEOPLE, fine: 1750, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-18', title: 'Roubo com Violência Leve', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-19', title: 'Roubo com Violência Moderada', category: LawCategory.PEOPLE, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-20', title: 'Roubo com Violência Grave', category: LawCategory.PEOPLE, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-21', title: 'Assalto a Mão Armada', category: LawCategory.PEOPLE, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-22', title: 'Tentativa de Assalto', category: LawCategory.PEOPLE, fine: 1250, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-23', title: 'Confronto em Festa', category: LawCategory.PEOPLE, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-24', title: 'Agressão em Trânsito', category: LawCategory.PEOPLE, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-25', title: 'Disputa Violenta', category: LawCategory.PEOPLE, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'p-new-26', title: 'Intimidação', category: LawCategory.PEOPLE, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'p-new-27', title: 'Intimidação com Arma', category: LawCategory.PEOPLE, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-28', title: 'Ameaça Virtual', category: LawCategory.PEOPLE, fine: 600, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'p-new-29', title: 'Ameaça Virtual Grave', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-30', title: 'Conflito Doméstico Leve', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-31', title: 'Conflito Doméstico Grave', category: LawCategory.PEOPLE, fine: 2000, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-32', title: 'Invasão de Residência', category: LawCategory.PEOPLE, fine: 1750, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-33', title: 'Lesão Corporal em Escola', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-34', title: 'Lesão Corporal em Local Público', category: LawCategory.PEOPLE, fine: 1250, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-35', title: 'Espancamento em Bar', category: LawCategory.PEOPLE, fine: 1750, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-36', title: 'Agressão com Faca', category: LawCategory.PEOPLE, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-37', title: 'Agressão com Arma de Fogo', category: LawCategory.PEOPLE, fine: 2500, jailTime: 15, seizure: SeizureStatus.NO },
  { id: 'p-new-38', title: 'Confronto com Autoridade', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-39', title: 'Assédio Sexual', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-40', title: 'Violência em Festa', category: LawCategory.PEOPLE, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-41', title: 'Injúria / Discriminação', category: LawCategory.PEOPLE, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'p-new-42', title: 'Espionagem / Invasão de Privacidade', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-43', title: 'Confronto Violento em Bairro', category: LawCategory.PEOPLE, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-44', title: 'Ataque Planejado', category: LawCategory.PEOPLE, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-45', title: 'Briga entre Membros de Grupo', category: LawCategory.PEOPLE, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'p-new-46', title: 'Conflito Doméstico', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-47', title: 'Agressão em Escola / Universidade', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-48', title: 'Ameaça a Funcionário Publico', category: LawCategory.PEOPLE, fine: 1250, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-49', title: 'Confronto com Multidão', category: LawCategory.PEOPLE, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-50', title: 'Espancamento em Trânsito', category: LawCategory.PEOPLE, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'p-new-51', title: 'Agressão em Evento', category: LawCategory.PEOPLE, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'p-new-52', title: 'Ameaça com Arma Branca', category: LawCategory.PEOPLE, fine: 1750, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'p-new-53', title: 'Agressão Física Grave', category: LawCategory.PEOPLE, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'p-new-54', title: 'Tentativa de Homicídio', category: LawCategory.PEOPLE, fine: 2500, jailTime: 15, seizure: SeizureStatus.NO },
  { id: 'p-new-55', title: 'Homicídio', category: LawCategory.PEOPLE, fine: 2500, jailTime: 15, seizure: SeizureStatus.NO },

  // --- CRIMES GERAIS (Novos) ---
  { id: 'g-new-1', title: 'Furto Simples', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-2', title: 'Furto de Loja', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-3', title: 'Tentativa de Furto', category: LawCategory.GENERAL, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'g-new-4', title: 'Roubo de Loja', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-5', title: 'Roubo de Residência', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-6', title: 'Tentativa de Roubo', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-7', title: 'Dano ao Patrimônio Público', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-8', title: 'Dano ao Patrimônio Privado', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-9', title: 'Vandalismo', category: LawCategory.GENERAL, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'g-new-10', title: 'Depredação de Veículo', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-11', title: 'Corrupção Simples', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-12', title: 'Estelionato', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-13', title: 'Tentativa de Estelionato', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-14', title: 'Falsificação de Documento', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-15', title: 'Falsificação de Cheque', category: LawCategory.GENERAL, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'g-new-16', title: 'Condução de Atividade Ilegal', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-17', title: 'Contrabando Leve', category: LawCategory.GENERAL, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'g-new-18', title: 'Contrabando de Produtos Ilícitos', category: LawCategory.GENERAL, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-19', title: 'Tráfico de Produtos Ilegais', category: LawCategory.GENERAL, fine: 2500, jailTime: 15, seizure: SeizureStatus.NO },
  { id: 'g-new-20', title: 'Tentativa de Tráfico', category: LawCategory.GENERAL, fine: 1750, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-21', title: 'Arrombamento', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-22', title: 'Invasão de Propriedade Privada', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-23', title: 'Tentativa de Invasão de Propriedade', category: LawCategory.GENERAL, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'g-new-24', title: 'Crime Ambiental Simples', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-25', title: 'Poluição Intencional', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-26', title: 'Descarte de Lixo Ilegal', category: LawCategory.GENERAL, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'g-new-27', title: 'Roubo de Veículo (carro/caminhão)', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-28', title: 'Tentativa de Roubo de Veículo', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-29', title: 'Fuga de Prisão Simples', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-30', title: 'Fuga de Prisão Grave', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-31', title: 'Resistência à Prisão', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-32', title: 'Corrupção de Funcionário Público', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-33', title: 'Lavagem de Dinheiro', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-34', title: 'Apropriação Indevida', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-35', title: 'Extorsão', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-36', title: 'Extorsão Grave', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-37', title: 'Recebimento de Produto Roubado', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-38', title: 'Tentativa de Recebimento de Produto Roubado', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-39', title: 'Crime de Informática Simples', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-40', title: 'Hackerismo Leve', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-41', title: 'Hackerismo Grave', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-42', title: 'Fraude Eletrônica', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-43', title: 'Tentativa de Fraude Eletrônica', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-44', title: 'Sabotagem', category: LawCategory.GENERAL, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-45', title: 'Tentativa de Sabotagem', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-46', title: 'Incêndio Simples', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-47', title: 'Incêndio Grave', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-48', title: 'Arrombamento de Caixa Eletrônico', category: LawCategory.GENERAL, fine: 2250, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-49', title: 'Tentativa de Arrombamento de Caixa Eletrônico', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-50', title: 'Crime de Contravenção', category: LawCategory.GENERAL, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'g-new-51', title: 'Porte de Arma Ilegal', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-52', title: 'Porte de Arma Branca Ilegal', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-53', title: 'Porte de Substância Proibida (leve)', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-54', title: 'Porte de Substância Proibida (grave)', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-55', title: 'Tentativa de Contrabando de Substância', category: LawCategory.GENERAL, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'g-new-56', title: 'Atividade Ilegal Comercial', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-57', title: 'Contrabando de Produtos', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-58', title: 'Tentativa de Contrabando', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-59', title: 'Violação de Propriedade', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-60', title: 'Danos a Propriedade do Governo', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-61', title: 'Vandalismo de Patrimônio Histórico', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-62', title: 'Tentativa de Vandalismo', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-63', title: 'Apropriação Indevida de Veículo', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-64', title: 'Tentativa de Apropriação de Veículo', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-65', title: 'Falsificação de Identidade', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-66', title: 'Uso Indevido de Documento', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-67', title: 'Violação de Direitos Autorais', category: LawCategory.GENERAL, fine: 750, jailTime: 3, seizure: SeizureStatus.NO },
  { id: 'g-new-68', title: 'Tentativa de Violação de Direitos Autorais', category: LawCategory.GENERAL, fine: 500, jailTime: 2, seizure: SeizureStatus.NO },
  { id: 'g-new-69', title: 'Espionagem Comercial', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-70', title: 'Tentativa de Espionagem Comercial', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-71', title: 'Crime de Fraude em Comércio', category: LawCategory.GENERAL, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'g-new-72', title: 'Tentativa de Fraude em Comércio', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-73', title: 'Vandalismo Urbano', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-74', title: 'Poluição de Águas', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-75', title: 'Destruição de Vegetação', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-76', title: 'Invasão de Área Restrita', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-77', title: 'Condução de Negócio Ilegal', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-78', title: 'Tentativa de Condução de Negócio Ilegal', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-79', title: 'Atividade de Contrabando Leve', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-80', title: 'Atividade de Contrabando Grave', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-81', title: 'Fraude em Contrato', category: LawCategory.GENERAL, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'g-new-82', title: 'Tentativa de Fraude em Contrato', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-83', title: 'Lavagem de Dinheiro Simples', category: LawCategory.GENERAL, fine: 1500, jailTime: 7, seizure: SeizureStatus.NO },
  { id: 'g-new-84', title: 'Lavagem de Dinheiro Grave', category: LawCategory.GENERAL, fine: 2500, jailTime: 12, seizure: SeizureStatus.NO },
  { id: 'g-new-85', title: 'Extorsão Leve', category: LawCategory.GENERAL, fine: 1000, jailTime: 5, seizure: SeizureStatus.NO },
  { id: 'g-new-86', title: 'Extorsão Grave', category: LawCategory.GENERAL, fine: 2000, jailTime: 10, seizure: SeizureStatus.NO },
  { id: 'g-new-87', title: 'Recebimento de Produtos Ilegais', category: LawCategory.GENERAL, fine: 1750, jailTime: 8, seizure: SeizureStatus.NO },
  { id: 'g-new-88', title: 'Tentativa de Recebimento de Produtos Ilegais', category: LawCategory.GENERAL, fine: 1250, jailTime: 5, seizure: SeizureStatus.NO },
];