
export const Container = ({style, children}) => {
  return <div className="container" style={{...style}}>
    <style jsx global>
      {`
        .container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: .2s linear 0s;
        }
        
        
        @media (min-width: 1200px) {
          .container {
            width: 1170px;
          }
        }
      `}
    </style>
    {children}
  </div>
}
