// Each folder in the /src/viz folder is a codesandbox showing the related viz component
// Just pass the folder name to this component and it will embed the codesandbox
import React from 'react';
import { Button } from '@/component/UI/button';
import { CodeSandbox } from './CodeSandbox';

type CodeSandboxButtonProps = {
  vizName: string;
  label: string;
};

export default function CodeSandboxButton({
  vizName,
  label,
}: CodeSandboxButtonProps) {
  const [showSandbox, setShowSandbox] = React.useState(false);

  return (
    <>
      {!showSandbox && (
        <Button size={'sm'} onClick={() => setShowSandbox(true)}>
          {label}
        </Button>
      )}
      {showSandbox && (
        <Button size={'sm'} onClick={() => setShowSandbox(false)}>
          Hide Sandbox
        </Button>
      )}

      {showSandbox && (
        <>
          <br />
          <br />
          <div className="">
            <CodeSandbox vizName={vizName} />
          </div>
        </>
      )}
    </>
  );
}
