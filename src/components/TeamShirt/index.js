import React from 'react'
import { Stage, Layer, Shape } from 'react-konva'

const TeamShirt = () => {
  return (
    <Stage width={300} height={300}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath()
            context.moveTo(25, 20)
            context.lineTo(60, 20)
            context.quadraticCurveTo(80, 60, 100, 20)
            context.lineTo(130, 20)

            // (
            context.quadraticCurveTo(100, 50, 140, 80)
            context.lineTo(140, 200)
            context.lineTo(20, 200)
            context.lineTo(20, 80)
            context.quadraticCurveTo(60, 50, 25, 20)
            context.closePath()
            // (!) Konva specific method, it is very important
            context.fillStrokeShape(shape)
          }}
          fill="#4A2478"
          stroke="black"
          strokeWidth={2}
        />
      </Layer>
    </Stage>
  )
}

export default TeamShirt
