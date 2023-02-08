import PropTypes from "prop-types"

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
  const formattedMessage= message.replace(/ /g, "20%")

 return <>
  <div className="fixed bottom-2 right-2 flex flexColum">
    <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target= "_blank"
        rel= "noreferrer noopener"
      >
          <img
              src={logo}
              width={width}
              height={height}
              alt= "Logo de Whatsapp"
              />
   </a>
    </div>
 </>
}

WhatsappButton.PropTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "",
  phone: "3002580000",
  message: "Estás comunicandote con VTEX University, por favor ingresa tu duda",
  width: 80,
  height: 80
}

WhatsappButton.schema = {
  title: "Botón de Whatsapp",
  type: "object",
  properties: {
    logo: {
      title: "Logo de Whatsapp",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega por favor el mensaje que se vera para tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "Ancho",
      description: "Agrega ancho de la imagen",
      type: "number"
    },
    height: {
      title: "Altura",
      description: "Agrega altura de la imagen",
      type: "number"
    }
  }
}

export default WhatsappButton
