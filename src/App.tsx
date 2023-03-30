import { useState } from 'react'

//local imports
import { Navbar } from '@/scenes'
import { SelectedPage } from '@/shared/types'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
    </div>
  )
}

export default App
