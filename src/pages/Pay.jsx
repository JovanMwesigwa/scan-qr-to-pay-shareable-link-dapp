import React, { useEffect, useState } from 'react'
import EthereumQRPlugin from 'ethereum-qr-code'
import QRCode from 'qrcode.react'
import { useParams } from 'react-router-dom'
import { ethers } from 'ethers'

const Pay = () => {
  const { session } = useParams()
  let decodedData = JSON.parse(decodeURIComponent(session))

  const [qrData, setQrData] = useState()
  const qr = new EthereumQRPlugin()

  useEffect(() => {
    generateQRCode()
  }, [decodedData])

  const generateQRCode = async () => {
    const qrData = qr.toDataUrl({
      to: decodedData.address,
      value: ethers.parseEther(decodedData.amount),
      chainId: 44787,
    })

    qrData.then((code) => {
      console.log('Your QR id generated:', code.value)
      setQrData(code.value)
    })
  }

  return (
    <div className="flex p-10 flex-1 flex-col items-center justify-center">
      <div className="w-96 h-80 rounded-md flex items-center justify-center bg-gray-50">
        {qrData && <QRCode className="w-full h-full" value={qrData} />}
      </div>
    </div>
  )
}

export default Pay
