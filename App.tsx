import React, { useState, useEffect, useMemo } from 'react';
import { LAWS_DATA } from './constants';
import { LawCategory, SeizureStatus } from './types';
import { 
  Car, 
  Users, 
  Scale, 
  Search, 
  Calculator, 
  X, 
  ArrowRight,
  ShieldAlert,
  Clock,
  Banknote,
  AlertTriangle
} from 'lucide-react';

// --- Landing Page Component ---
interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onEnter, 600);
  };

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-primary to-primary-light z-[100] flex flex-col items-center justify-center p-6 text-white transition-opacity duration-500 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="text-center animate-bounce mb-6">
        <Scale size={80} className="mx-auto" />
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-8 drop-shadow-lg">
        Código Penal de NewVille
      </h1>
      <p className="max-w-md text-center text-blue-100 mb-10 text-lg">
        Consulte infrações, calcule taxas e mantenha-se informado sobre as leis da cidade.
      </p>
      <button 
        onClick={handleEnter}
        className="group bg-white text-primary font-bold py-4 px-10 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
      >
        <span>Acessar Sistema</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

// --- Calculator Modal Component ---
interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setValue('');
      setResult(null);
    }
  }, [isOpen]);

  const handleCalculate = () => {
    const num = parseFloat(value);
    if (isNaN(num) || num <= 0) {
      setResult("Valor inválido");
      return;
    }
    const fee = num * 0.15;
    setResult(`Taxa de liberação: $ ${fee.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 transform transition-all animate-[scaleIn_0.3s_ease-out]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Calculator className="w-6 h-6" /> Calculadora
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valor do Veículo ($)</label>
            <input 
              type="number" 
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ex: 50000"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>

          <button 
            onClick={handleCalculate}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-primary/30"
          >
            Calcular Taxa (15%)
          </button>

          {result && (
            <div className={`mt-4 p-4 rounded-xl text-center font-bold text-lg ${result.includes('inválido') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700 border border-green-200'}`}>
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<LawCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  // Filter Logic
  const filteredLaws = useMemo(() => {
    return LAWS_DATA.filter(law => {
      const matchesCategory = selectedCategory === 'all' || law.category === selectedCategory;
      const matchesSearch = law.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            law.id.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Color helpers
  const getCategoryColor = (cat: LawCategory) => {
    switch (cat) {
      case LawCategory.TRAFFIC: return 'bg-blue-600';
      case LawCategory.PEOPLE: return 'bg-red-500';
      case LawCategory.GENERAL: return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryLightColor = (cat: LawCategory) => {
    switch (cat) {
      case LawCategory.TRAFFIC: return 'bg-blue-50 text-blue-700';
      case LawCategory.PEOPLE: return 'bg-red-50 text-red-700';
      case LawCategory.GENERAL: return 'bg-amber-50 text-amber-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  if (!hasEntered) {
    return <LandingPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-primary text-white pt-8 pb-16 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 transform -translate-x-1/3 translate-y-1/3 w-64 h-64 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
          <div className="flex items-center gap-3">
             <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Scale className="w-8 h-8 text-white" />
             </div>
             <div>
               <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Código Penal</h1>
               <p className="text-blue-100 text-sm font-medium">Cidade de NewVille</p>
             </div>
          </div>
          
          <button 
            onClick={() => setIsCalcOpen(true)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-xl font-semibold transition-all hover:shadow-lg border border-white/20"
          >
            <Calculator size={18} />
            <span>Calculadora</span>
          </button>
        </div>
      </header>

      {/* Main Content Area - Shifted up to overlap header */}
      <main className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8 border border-gray-100">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === 'all' ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Todos
            </button>
            <button 
              onClick={() => setSelectedCategory(LawCategory.TRAFFIC)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === LawCategory.TRAFFIC ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
            >
              <Car size={16} /> Trânsito
            </button>
            <button 
              onClick={() => setSelectedCategory(LawCategory.PEOPLE)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === LawCategory.PEOPLE ? 'bg-red-500 text-white shadow-md shadow-red-200' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}
            >
              <Users size={16} /> Pessoas
            </button>
            <button 
              onClick={() => setSelectedCategory(LawCategory.GENERAL)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${selectedCategory === LawCategory.GENERAL ? 'bg-amber-500 text-white shadow-md shadow-amber-200' : 'bg-amber-50 text-amber-600 hover:bg-amber-100'}`}
            >
              <ShieldAlert size={16} /> Gerais
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Pesquisar por nome da infração, multa..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder-gray-400 font-medium text-gray-700"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLaws.length > 0 ? (
            filteredLaws.map((law, index) => (
              <div 
                key={law.id} 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Color Bar */}
                <div className={`h-1.5 w-full ${getCategoryColor(law.category)}`} />
                
                <div className="p-5 flex-1 flex flex-col">
                  {/* Badge Header */}
                  <div className="flex justify-between items-start mb-3">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${getCategoryLightColor(law.category)}`}>
                      Art. {filteredLaws.indexOf(law) + 1}
                    </span>
                    
                    {law.seizure === SeizureStatus.YES && (
                      <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full border border-yellow-200" title="Apreensão do Veículo">
                        <Car size={12} /> Apreensão
                      </span>
                    )}
                    {law.seizure === SeizureStatus.MAYBE && (
                      <span className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full border border-gray-200" title="Possível Apreensão">
                        <AlertTriangle size={12} /> Talvez
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 leading-tight mb-4 flex-grow">
                    {law.title}
                  </h3>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Banknote size={16} className="text-green-600" />
                        <span className="font-semibold text-gray-900">
                          {typeof law.fine === 'number' 
                            ? `$ ${law.fine.toLocaleString('pt-BR')}` 
                            : `$ ${law.fine}`}
                        </span>
                      </div>
                    </div>

                    {law.jailTime ? (
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-red-50 p-2 rounded-lg border border-red-100">
                        <Clock size={16} className="text-red-500" />
                        <span>Prisão: <strong className="text-red-700">{law.jailTime} min</strong></span>
                      </div>
                    ) : (
                      <div className="h-[38px]"></div> /* Spacer to keep cards aligned */
                    )}

                    {law.note && (
                       <p className="text-xs text-gray-400 italic mt-2 border-t pt-2">Note: {law.note}</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center opacity-60">
               <Search size={48} className="mx-auto mb-4 text-gray-300" />
               <p className="text-xl font-medium text-gray-500">Nenhuma infração encontrada.</p>
               <p className="text-gray-400">Tente buscar por outro termo.</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center text-sm text-gray-400 pb-8">
          &copy; {new Date().getFullYear()} Todos os direitos reservados ao turzim e NewVille.
        </div>

      </main>

      <CalculatorModal isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
    </div>
  );
}