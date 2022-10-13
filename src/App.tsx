import { Button, Footer, Header, Help, Loader, Modal, Notification } from "./shared/components"
import { Table } from "./shared/components/Table"
import { ThemeProvider } from "./shared/contexts"
import { useApp } from "./shared/hooks"

const App: React.FC = () => {
  const { 
    data, 
    handleBlur, handleClear,
    modal, handleOpen, handleClose,
    handleSubmit,
    loader, message, content 
  } = useApp()
  
  return (
    <ThemeProvider>
      <Header />
      <Table data={data} handleBlur={handleBlur} handleClear={handleClear} />
      <Button handleClick={handleOpen} />
      <Footer />
      <Modal open={modal} handleClose={handleClose} handleSubmit={handleSubmit} />
      <Loader open={loader} />
      <Notification message={message} handleClose={handleClose}>
        {content && <Help />}
      </Notification>
    </ThemeProvider>
  )
}

export default App
