import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Calendar, 
  FileText, 
  Users, 
  DollarSign, 
  BookOpen, 
  Settings, 
  Bell, 
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react'
import './App.css'
import dashboardHero from './assets/dashboard-hero.jpg'
import cooperativaSeguros from './assets/cooperativa-seguros.png'
import equipeColaboracao from './assets/equipe-colaboracao.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const quickAccessItems = [
    {
      title: "Comissões e Pagamentos",
      description: "Relatórios, prazos e cronograma de pagamentos",
      icon: DollarSign,
      status: "urgent",
      deadline: "13-14 Agosto",
      color: "bg-orange-500"
    },
    {
      title: "Treinamentos",
      description: "Próximas turmas e certificações",
      icon: BookOpen,
      status: "upcoming",
      deadline: "13 Ago - 10:00",
      color: "bg-blue-500"
    },
    {
      title: "Sistemas",
      description: "Mutualizo, SplitC e Portal do Consultor",
      icon: Settings,
      status: "active",
      deadline: "Disponível",
      color: "bg-green-500"
    },
    {
      title: "Documentos",
      description: "Formulários, manuais e recursos",
      icon: FileText,
      status: "active",
      deadline: "Sempre disponível",
      color: "bg-purple-500"
    }
  ]

  const upcomingEvents = [
    { date: "13 Ago", event: "Treinamento Endosso", time: "10:00" },
    { date: "14 Ago", event: "Prazo Relatórios", time: "Final do dia" },
    { date: "18 Ago", event: "Envio de Notas", time: "Final do dia" },
    { date: "22 Ago", event: "Pagamento Comissões", time: "Durante o dia" },
    { date: "Set", event: "VSP Summit 2025", time: "A definir" }
  ]

  const importantLinks = [
    { title: "Formulário Inconsistências", url: "https://forms.gle/3ckPvzFUB8nTpSuY7", urgent: true },
    { title: "Sistema Mutualizo", url: "#", external: true },
    { title: "Plataforma SplitC", url: "#", external: true },
    { title: "Gravação Treinamento", url: "#", external: true }
  ]

  const paymentSchedule = [
    { day: "05", description: "Despesas administrativas e operacionais" },
    { day: "10", description: "Oficinas e Cooperados" },
    { day: "15", description: "Reboques, VFR e terceiros" },
    { day: "20", description: "Comissões" },
    { day: "25", description: "Oficinas e Cooperados" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Portal VSP</h1>
                  <p className="text-xs text-gray-500">Central de Informações</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
              </Button>
              <Button size="sm">
                Acessar Sistema
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Bem-vindo ao Portal VSP
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Sua central de informações para acesso rápido e intuitivo a tudo que você precisa como parceiro da cooperativa VSP.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Acessar Sistemas
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  Ver Cronograma
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dashboardHero} 
                alt="Dashboard Portal VSP" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Acesso Rápido</h3>
            <p className="text-lg text-gray-600">Principais recursos e informações que você precisa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item, index) => (
              <Card key={index} className="card-hover cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${item.color} text-white`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    {item.status === 'urgent' && (
                      <Badge variant="destructive" className="pulse-animation">Urgente</Badge>
                    )}
                    {item.status === 'upcoming' && (
                      <Badge variant="secondary">Próximo</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.deadline}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline and Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Próximos Eventos</h4>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="text-sm font-semibold text-primary">{event.date}</div>
                      <div className="text-xs text-gray-500">{event.time}</div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-medium text-gray-900">{event.event}</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Schedule */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Cronograma de Pagamentos</h4>
              <div className="space-y-3">
                {paymentSchedule.map((payment, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {payment.day}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{payment.description}</div>
                      <div className="text-xs text-gray-500">Pagamento no dia útil seguinte</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Links Importantes</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {importantLinks.map((link, index) => (
              <Card key={index} className="card-hover cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">{link.title}</h5>
                      {link.urgent && (
                        <Badge variant="destructive" className="text-xs">Prazo: 11/08</Badge>
                      )}
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Contato e Suporte</h4>
            <p className="text-lg text-gray-600">Canais de atendimento disponíveis para você</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h5 className="font-semibold text-gray-900 mb-2">Atendimento Geral</h5>
                <p className="text-gray-600">Suporte para dúvidas gerais e orientações</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h5 className="font-semibold text-gray-900 mb-2">Financeiro</h5>
                <p className="text-gray-600">Questões sobre comissões e pagamentos</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MessageSquare className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h5 className="font-semibold text-gray-900 mb-2">Suporte Técnico</h5>
                <p className="text-gray-600">Ajuda com sistemas e plataformas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VSP Summit Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-3xl font-bold mb-4">VSP Summit 2025</h4>
              <p className="text-xl mb-6 text-blue-100">
                Convenção Comercial VSP na segunda quinzena de setembro. 
                Um momento especial para nos reencontrarmos e fortalecer nossa parceria.
              </p>
              <Button size="lg" variant="secondary">
                <Calendar className="h-5 w-5 mr-2" />
                Saiba Mais
              </Button>
            </div>
            <div>
              <img 
                src={equipeColaboracao} 
                alt="Equipe VSP" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="font-bold text-lg">Portal VSP</span>
              </div>
              <p className="text-gray-400">
                Central de informações da cooperativa VSP para parceiros e colaboradores.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Acesso Rápido</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sistemas</a></li>
                <li><a href="#" className="hover:text-white">Treinamentos</a></li>
                <li><a href="#" className="hover:text-white">Documentos</a></li>
                <li><a href="#" className="hover:text-white">Comissões</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Suporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Atendimento</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Ajuda</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Informações</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre a VSP</a></li>
                <li><a href="#" className="hover:text-white">Regulamentação</a></li>
                <li><a href="#" className="hover:text-white">Eventos</a></li>
                <li><a href="#" className="hover:text-white">Notícias</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VSP - Cooperativa de Seguros. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

