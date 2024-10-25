// pages/design.tsx
import type { NextPage } from 'next'

const Design: NextPage = () => {
  //const indentAmount = 16 // Assuming 16 corresponds to 'pl-16' in Tailwind

  return (
    <div className="flex flex-col items-center w-1/2 ml-auto mr-auto">
      <div className="p-8">
        <main className={`shadow rounded-lg p-6`}>
          <h1 className="text-2xl font-bold border-b pb-2">Design</h1>
          <p className="italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Donec quam felis, ultricies
            nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
            enim.
          </p>

          {/* Section 1 */}
          <h2 id="introduction" className="text-xl font-semibold mt-4">
            Introduction
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            gravida magna sit amet dui consectetur, in scelerisque velit
            facilisis. Sed ullamcorper tristique nunc, id venenatis erat
            efficitur ac. Morbi ut cursus ligula. Pellentesque et lacus vel eros
            vestibulum iaculis. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
          </p>
          {[...Array(30)].map((_, i) => (
            <p key={`intro-${i}`}>
              Donec id justo eget ligula vestibulum dapibus. Ut sagittis nunc
              nec tellus commodo blandit. Phasellus volutpat risus nec dui
              vehicula, ac lacinia massa dapibus. Praesent ac odio viverra,
              luctus ligula nec, maximus nisi. In auctor leo vel nisi venenatis
              tincidunt. Vestibulum volutpat nibh id suscipit cursus.
            </p>
          ))}

          {/* Section 2 */}
          <h2 id="layout" className="text-xl font-semibold mt-4">
            Layout Guidelines
          </h2>
          <p>
            Nunc posuere quam a justo efficitur ultricies. Ut pulvinar at purus
            eu varius. Cras facilisis eros ut risus tincidunt convallis. Ut sed
            eros interdum, cursus orci nec, volutpat elit.
          </p>
          {[...Array(40)].map((_, i) => (
            <p key={`layout-${i}`}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Sed dapibus sollicitudin enim, et vulputate
              dolor scelerisque in. Curabitur auctor mollis sapien ut tincidunt.
              Vivamus vulputate ligula eget dolor sollicitudin efficitur. Nullam
              euismod dolor eget libero posuere fermentum. Aenean at vestibulum
              nulla.
            </p>
          ))}

          {/* Section 3 */}
          <h2 id="requirements" className="text-xl font-semibold mt-4">
            Technical Requirements
          </h2>
          <p>
            Integer sodales turpis vel ligula facilisis, non convallis dui
            volutpat. Proin ut dapibus risus. Nam ac odio at felis pulvinar
            facilisis. Aenean aliquet libero at neque facilisis, at tincidunt
            magna auctor.
          </p>
          {[...Array(50)].map((_, i) => (
            <p key={`requirements-${i}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae nisl non leo eleifend facilisis ut in purus. In ac nisl
              magna. Ut sit amet ex ipsum. Duis non orci non odio laoreet
              venenatis. Suspendisse tristique lacus a nisi condimentum
              vulputate. Ut porttitor luctus sem quis cursus.
            </p>
          ))}

          {/* Section 4 */}
          <h2 id="documentation" className="text-xl font-semibold mt-4">
            Documentation & Revision Control
          </h2>
          <p>
            Cras maximus lorem ac ex laoreet, vitae sodales lorem hendrerit.
            Mauris venenatis felis et orci tempor, a venenatis magna vestibulum.
            Suspendisse potenti.
          </p>
          {[...Array(35)].map((_, i) => (
            <p key={`documentation-${i}`}>
              Aliquam erat volutpat. Etiam malesuada mi ut ex malesuada, vel
              molestie dolor elementum. Duis faucibus convallis leo, at mattis
              lectus consequat nec. Phasellus tincidunt, libero sit amet
              malesuada suscipit, ligula ex blandit felis, non tempor lorem
              massa in magna.
            </p>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Design
