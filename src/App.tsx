import Header from "./components/header";
import Options from "./components/options";
import Extension from "./components/extension";
import { useMemo, useState } from "react";
import type { Option } from "./types/options";
import data from "./assets/data.json";
const extensionsGlobal = data.map((extension) => {
  const logo = extension.logo.replace(/^\./, '') as string;
  return ({...extension, logo})
})

function App() {
  const [option, setOption] = useState<Option>('all');
  const [extensions, setExtensions] = useState(extensionsGlobal);

  const extensionsFilter = useMemo(() => {
    switch (option) {
      case 'all':
        return extensions;

      case 'active':
        const actives = extensions.filter(e => e.isActive)
        return actives;

      case 'inactive': 
      const inactives = extensions.filter(e => !e.isActive)
        return inactives;

        default:
          return [];
    }
  }, [option, extensions]);

  const changeIsActive = (name: string) => {
    setExtensions((allExtensions) => {
      const extensions = [...allExtensions]
      const indexExtension = extensions.findIndex((e) => e.name === name);
      const extension = extensions[indexExtension];
      const isActive = !extension.isActive;
      const newExtension = {...extension, isActive};
      extensions[indexExtension] = newExtension;
      return extensions;
    });
  }

  const removeExtension = (name: string) => {
    setExtensions((allExtensions) => allExtensions.filter((e) => e.name !== name));
  }

  return (
    <>
      <main className="h-screen">
        <div className="p-4 lg:max-w-[1024px] lg:p-0 lg:py-8 mx-auto">
          <Header />
          <Options option={option} setOption={setOption} />
          <section className='grid gap-4 lg:grid-cols-3'>
            {
              extensionsFilter &&  
            extensionsFilter!.length > 0 &&  
            extensionsFilter?.map((e, i) => <Extension key={i} extension={e} changeIsActive={changeIsActive} removeExtension={removeExtension} />)
            }

          </section>
        </div>
      </main>
      {/* Extensions List All Active Inactive DevLens Quickly inspect page layouts and visualize element boundaries. Remove StyleSpy Instantly analyze and copy CSS from any webpage element. Remove SpeedBoost Optimizes browser resource usage to accelerate page loading. Remove JSONWizard Formats, validates, and prettifies JSON responses in-browser. Remove TabMaster Pro Organizes browser tabs into groups and sessions. Remove ViewportBuddy Simulates various screen resolutions directly within the browser. Remove Markup Notes Enables annotation and notes directly onto webpages for collaborative debugging. Remove GridGuides Overlay customizable grids and alignment guides on any webpage. Remove Palette Picker Instantly extracts color palettes from any webpage. Remove LinkChecker Scans and highlights broken links on any page. Remove DOM Snapshot Capture and export DOM structures quickly. Remove ConsolePlus Enhanced developer console with advanced filtering and logging. Remove */}
    </>
  )
}

export default App
