import React from 'react'

import AddCameraScreenshot from 'images/scene/add_camera.webp'
import AddonsScreenshot from 'images/scene/add_ons.webp'
import BlenderScreenshot from 'images/scene/blender.webp'
import CollectionsScreenshot from 'images/scene/collections.webp'
import DesktopTexture from 'images/scene/desktop_texture.webp'
import ErrorMessageScreenshot from 'images/scene/error_message.webp'
import ExportCompressionScreenshot from 'images/scene/export_compression.webp'
import FifthRender from 'images/scene/fifth_render.webp'
import FirstRender from 'images/scene/first_render.webp'
import FirstOnWeb from 'images/scene/first_on_web.webp'
import FourGroupsScreenshot from 'images/scene/four_groups.webp'
import ODAConverterScreenshot from 'images/scene/oda_converter.webp'
import JoinScreenshot from 'images/scene/join.webp'
import KeyboardScaleScreenshot from 'images/scene/keyboard_scale.webp'
import MicrophoneScreenshot from 'images/scene/microphone.webp'
import MouseScreenshot from 'images/scene/mouse.webp'
import NoTexturesScreenshot from 'images/scene/no_textures.webp'
import PreferencesScreenshot from 'images/scene/preferences.webp'
import SecondRender from 'images/scene/second_render.webp'
import ThirdRender from 'images/scene/third_render.webp'
import Wood from 'images/scene/wood.png'
import UvEdit from 'images/scene/uv_edit.webp'
import FinalRender from 'images/scene/final_render.webp'

import CodeBlock from './code_block'
import DeskScene from './desk_scene'
import InlineCode from './inline_code'
import Title from './title'

const Scene = (): JSX.Element => {
  return (
    <div className='flex flex-col px-16 pb-4 bg-base-300'>
      <Title title='Crafting 3D Magic: Building Immersive Interactive Scenes for the Web' />
      <div className='prose max-w-none p-8 flex flex-col bg-base-100'>
        <div>
          I&apos;d like to recreate my desk environment in 3D for the web? How do I do that?
          Let&apos;s get started!
        </div>
        <h2 className='flex items-center text-error'>
          1. What items should I model?
        </h2>
        <p>
          I&apos;m going to try to find as many 3D models as I can of the things
          I need - this reduces the amount of work I&apos;ll have to do.
        </p>
        <ul>
          <li>

            <a className='text-info' href='https://www.vari.com/furniture-models/design-resources.html'>
              VariDesk
            </a>
          </li>
          <li>
            <a className='text-info' href='https://sketchfab.com/3d-models/hyperx-quadcast-f2c51a6d69d2498db3b3e9c1cda0e695'>
              HyperX Quadcast Microphone
            </a> -{' '}
            <a className='text-info' href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>
            <a className='text-info' href='https://sketchfab.com/3d-models/apple-macbook-pro-16-inch-2021-6a42b31bac064b00a91fbfebec07c852'>
              MacBook Pro
            </a> -{' '}
            <a className='text-info' href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>Rain Design mStand</li>
          <li>
            <a className='text-info' href='https://sketchfab.com/3d-models/razer-huntsman-tkl-43618c6b85dd43e99c2aa85cac0ebda7'>
              Razer Huntsman Keyboard
            </a> -{' '}
            <a className='text-info' href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>
            <a className='text-info' href='https://www.cgtrader.com/free-3d-models/electronics/computer/razer-deathadder-v2-pro'>
              Razer Deathadder V2 Mouse
            </a>
          </li>
          <li>
            <a className='text-info' href='https://sketchfab.com/3d-models/curved-gaming-monitor-2d272e0133524db9b6503d5d265b2278'>
              Computer monitor (mine is nothing fancy so I picked a fancy-looking one)
            </a> -{' '}
            <a className='text-info' href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>
            <a className='text-info' href='https://sketchfab.com/3d-models/custom-gaming-pc-1a24273417534f69afa0f7c62b643ffc#download'>
              Lian Li Lancool II (I wasn&apos;t able to find my case, so I picked a close one, this one did not work out)
            </a> -{' '}
            <a className='text-info' href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>
            <a className='text-info' href='https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66'>
              Lian Li Lancool II (I wasn&apos;t able to find my case, so I picked a close one, this one worked well)
            </a> -{' '}
            <a className='text-info' href='https://creativecommons.org/licenses/by/4.0/'>
              License
            </a>
          </li>
          <li>
            <a className='text-info' href="https://www.freepik.com/free-photo/close-up-black-marble-textured-background_3472377.htm#query=marble%20texture&position=0&from_view=keyword&track=ais">
              Marble texture by rawpixel.com on Freepik
            </a>
          </li>
          <li>
            <a className='text-info' href="https://sketchfab.com/3d-models/eames-elephant-4fd3bb0ba70d40ab871d72c5875d69b6">
              Eames Elephant
            </a> -{' '}
            <a className='text-info' href='https://creativecommons.org/licenses/by-sa/4.0/'>
              License
            </a>
          </li>
        </ul>
        <h2 className='flex items-center text-error'>
          2. Building the scene
        </h2>
        <p>
          I&apos;m going to use Blender to compose the 3D models. The first
          hurdle is importing the VariDesk model.
          It&apos;s in <a className='text-info' href='https://en.wikipedia.org/wiki/.dwg'>dwg</a>
          {' '}format, so I&apos;ll need to use a plugin.
          I&apos;m going to follow{' '}
          <a className='text-info' href='https://all3dp.com/2/dwg-blender-import-files/#google_vignette'>
            this blog post</a> to figure out how this is done. Here we go!
        </p>
        <img className='rounded-lg w-fit' src={PreferencesScreenshot} alt='Edit -> Preferences menu.' />
        <p>
          I&apos;m going to enable the Import DXF Add-on. Unlike the blog post,
          I won&apos;t need to enable exporting as I won&apos;t be exporting
          DXF.
        </p>
        <img className='rounded-lg w-fit' src={AddonsScreenshot} alt='Enabling Import DXF Add-on' />
        <p>
          Also, the blog post doesn&apos;t recommend one particular tool to
          convert DWG to DXF. When possible, I try to use the most official tool.
          This appears to me to be the{' '}
          <a className='text-info' href='https://www.opendesign.com/guestfiles/oda_file_converter'>
          Open Design Alliance&apos;s. DWG-DXF converter.</a> I&apos;m running
          EndeavourOS so I&apos;ll have to use the AppImage. After some trial and error,
          I was able to make 2018 ASCII DXF work.
        </p>
        <img className='rounded-lg w-fit' src={ODAConverterScreenshot} alt='ODA Converter' />
        <p>
          I&apos;ll import this into Blender - here is the start of the scene!
          <img className='rounded-lg w-fit' src={BlenderScreenshot} alt='Initial Scene' />
          Next I want to import the microphone - but first I learned about{' '}
          <a className='text-info' href='https://docs.blender.org/manual/en/latest/scene_layout/collections/collections.html'>
            Blender collections </a>. I&apos;ll create a collection for the desk so the
            pieces don&apos;t get mixed up.
        </p>
        <img className='rounded-lg w-fit' src={CollectionsScreenshot} alt='Collections' />
        <p>
          From now on, I&apos;ll create collections <em>before</em> importing,
          so things stay tidy. I&apos;ll import the microphone model next and
          use the move tool to place it on the desk.
        </p>
        <img className='rounded-lg w-fit' src={MicrophoneScreenshot} alt='Microphone on desk' />
        <p>
          The desk looked a bit weird, so I wanted to simplify the geometry. I
          started by reading{' '}
          <a className='text-info' href='https://all3dp.com/2/blender-simplify-mesh-simply-explained/'>
            this blog post </a>, and ended with a slightly different solution - I
    could use this object menu to join everything in the collection into a
    single object. I now also know I can use the Decimate modifier to
    reduce the number of faces later if I need to.
        </p>
        <img className='rounded-lg w-fit' src={JoinScreenshot} alt='Joining objects menu' />
        <p>
          Getting the keyboard up was a wild ride - it was a{' '}
          <InlineCode>.blend</InlineCode> file, so I had to link
          the two files. I couldn&apos;t get the keyboard to link into my
          drawing, so I did the reverse and linked all of my objects into the
          keyboard&apos;s file. I had to scale the keyboard up by 20x so it
          would be a realistic size.
        </p>
        <img className='rounded-lg w-fit' src={KeyboardScaleScreenshot} alt='Now with keyboard' />
        <p>
          Next is the mouse. This one was also a{' '}
          <InlineCode>.blend</InlineCode> file, and included some
          additional stuff besides the mouse. I&apos;ll remove this and group
          everything else into a single object and collection so I can easily
          link it. I&apos;ll use Object -&gt; Join to do this once again. Then
          I can link the mouse into the scene.
        </p>
        <img className='rounded-lg w-fit' src={MouseScreenshot} alt='Now with mouse' />
        <p>
          Now, I&apos;d like to render an image to make sure this will look good
          before proceeding. I try to render and see there is no camera in the
          scene, so I will add one. This is done by pressing Shift+A and selecting
          Camera.
        </p>
        <img className='rounded-lg w-fit' src={AddCameraScreenshot} alt='Adding a camera' />
        <p>
          After some trial and error with moving the camera, I was able to make a
          good render. The desk needs some textures. Everything else looks great
          so far.
        </p>
        <img className='rounded-lg w-fit' src={FirstRender} alt='First render' />
        <p>
          Next, I&apos;ll add the Macbook Pro. I made two changes - first, I
          deleted a nested collection that was unneeded, then I scaled it up by
          4x to make it a more realistic size.
        </p>
        <img className='rounded-lg w-fit' src={SecondRender} alt='Second render' />
        <p>
          Next is the monitor - this came as a <InlineCode>
          .fbx</InlineCode> file, so all I need to do is import, move, and scale it.
          Let&apos;s look at the next render.
        </p>
        <img className='rounded-lg w-fit' src={ThirdRender} alt='Third render' />
        <p>
          Now, I&apos;m going to add textures to the desk. I realized I made a
          mistake aggressively joining objects - now it&apos;s not easy to apply
          different materials to different parts of the desk. I&apos;ll have to
          join them separately. I&aposll reopen this file, reimport the DXF, and
          split it into four groups.
        </p>
        <img className='rounded-lg w-fit' src={FourGroupsScreenshot} alt='Four groups' />
        <p>
          To add the top texture, I edited the top&apos;s material by clicking it
          and going to the Shader tab. I added a wave texture and applied some
          color curves until it looked like wood to me.
        </p>
        <img className='rounded-lg w-fit' src={DesktopTexture} alt='Desktop texture' />
        <p>
          I applied the default Plastic texture to the buttons, and the default
          Metal texture to the legs. I&apos;ll render again to see how it looks.
          This time I&apos;ll use the Cycles renderer instead of Eevee.
        </p>
        <img className='rounded-lg w-fit' src={FifthRender} alt='Fifth render' />
        <p>
          Now it&apos;s time to get this onto the web. We&apos;ll begin by
          exporting to glTF. Alas, we get an error message.
        </p>
        <img className='rounded-lg w-fit' src={ErrorMessageScreenshot} alt='Error message' />
        <p>
          The computer case was the most complex model, so I figured changing it
          could help. I went in and grouped as many objects as I could. I also
          learned that glb is like glTF but using binary instead of JSON. I was
          able to export thanks to the changes I made, and have a more efficient
          format thanks to glb.
        </p>
        <p>
          Yikes! The file is 82MB. I&apos;ll need to reduce the file size.
          I can use compression to do this - I&apos;ll start with the default of
          6, which reduced the file size to 23M. That&apos;s good enough for now.
        </p>
        <img className='rounded-lg w-fit' src={ExportCompressionScreenshot} alt='Export compression' />
        <h2 className='flex items-center text-error'>
          3. Getting the scene into the React app
        </h2>
        <p>
          To get the scene into the React app, we&apos;ll use a tool called{' '}
          <a className='text-info' href='https://github.com/pmndrs/gltfjsx'>gltfjsx</a>. This will
          transform the scene and provide a React component for us. I run the
          following command:
        </p>
        <CodeBlock language='shell'>
          $ npx gltfjsx desk_scene.glb --transform -t
        </CodeBlock>
        <p>
          This gives me a file called <InlineCode>
          desk_scene-transformed.glb</InlineCode> and a React component called{' '}
          <InlineCode>DeskScene</InlineCode>. I&apos;ll import this
          into the project. The transformed glb file is now only 12 megabytes.
          Unfortunately the textures don&apos;t work. I&apos;ll have to add them
          using Three.js.
        </p>
        <img className='rounded-lg w-fit' src={NoTexturesScreenshot} alt='No textures' />
        <h2 className='flex items-center text-error'>3. Fixing the textures</h2>
        <p>
          I&apos;s grab a picture of wood from{' '}
          <a className='text-info' href='https://freestocktextures.com/texture/wooden-plank-floor,1661.html'>
            Free Stock Textures </a> and use it as a texture.
        </p>
        <img className='rounded-lg w-fit' src={Wood} alt='Wood texture' />
        <p>
          Unfortunately, this only seems to turn the desk brown. I&apos;ll have to
          try something else.
        </p>
        <p>
          Additionally, the PC didn&apos;t render very well as it is a very
          complex model. I&apos;ll replace it with the second, simpler model I
          downloaded.
        </p>
        <img className='rounded-lg w-fit' src={FirstOnWeb} alt='Wood texture fail' />
        <p>
          From the{' '}
          <a className='text-info' href='https://threejs.org/docs/#manual/en/introduction/FAQ'> Three.js documentation </a>
    , the best format to use is glTF. However, the textures didn&apos;t
    work for me initially. I learned two key things that helped:
    <ol>
      <li>The texture <em>must</em> use a Principled BSDF shader.</li>
      <li>
        The texture should be UV mapped in what the Blender documents call
        the{' '}
        <a className='text-info' href='https://docs.blender.org/manual/en/latest/modeling/meshes/uv/unwrapping/index.html'>
    &ldquo;proper&rdquo;
        </a> way to use UV textures.
      </li>
    </ol>
        </p>
        <p>
          <a className='text-info' href='https://docs.blender.org/manual/en/2.80/addons/io_scene_gltf2.html#uv-mapping'>
            This page
          </a> of the Blender documentation was critical in learning how I
          needed to accomplish this. Using a Principled BSDF shader was
          straightforward in the Blender interface, I had not used UV mapping for
          the purposes of being compatible with glTF before. From the picture, we
          will need to create a UV map first. While the page doesn&apos;t specify,
          nodes view is in the Shader tab.
        </p>
        <p>
          So for the top of the desk, I have to begin by unwrapping the desk face.
          I&apos;ll select the desk, and go to the &ldquo;UV Editing&rdquo; tab
          in Blender.

          After a few tries, I found a combination that worked:
          <ol>
            <li>Click UV</li>
            <li>Check &ldquo;Live Unwrap&rdquo;</li>
            <li>Click UV again</li>
            <li>Point to Unwrap, then click Smart UV Project</li>
          </ol>
          <img className='rounded-lg w-fit' src={UvEdit} alt='UV Editing' />
        </p>
        <p>
          The mouse had some textures that did not work, so I also went into the
          Shader tab and found they were made with a PBR Uber shader. I swapped
          these out for Principled BSDF and everything is now rendering!
        </p>
        <p>
          For good measure, let&apos;s get a high quality Cycles render of the scene.
        </p>
        <img className='rounded-lg w-fit' src={FinalRender} alt='Final render' />
        <h2 className='flex items-center text-error'>4. Final Result</h2>
        <p>
          Here is the final result! Some things can still be improved, and now we
          have the tools to do so.
        </p>
        <div><DeskScene /></div>
        <h2 className='flex items-center text-error'>5. Next Steps</h2>
        <p>
          I&apos;ve used <InlineCode>THREE.js</InlineCode> to add
          some more details to the scene - perhaps I&apos;ll write a post later
          about how to do this. See the ongoing result{' '}
          <a className='text-info' href='/scene_2'>here</a>.
        </p>
      </div>
    </div>
  )
}

export default Scene
