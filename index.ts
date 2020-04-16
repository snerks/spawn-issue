import { spawn } from "child_process";

console.log("Hello from Typescript!!!");

const path = "C:\\\\D\\SamplesReact\\mui-theme-switcher-01";
// const path = "C:\\\\D\\SamplesReact\\football-stats-03";
const shell = "Git Bash";

const gitBashPath = `"C:\\\\Program Files\\Git\\git-bash.exe"`;
console.log(`launching ${shell} at shell path: ${gitBashPath}`);
console.log(`launching ${shell} with folder path: ${path}`);

spawn(gitBashPath, [`--cd="${path}"`], {
  shell: true,
  cwd: path,
});

console.log("After spawn");

// export function launch(
//     foundShell: IFoundShell<Shell>,
//     path: string
//   ): ChildProcess {
//     const shell = foundShell.shell

//     switch (shell) {
//       case Shell.PowerShell:
//         const psCommand = `"Set-Location -LiteralPath '${path}'"`
//         return spawn('START', ['powershell', '-NoExit', '-Command', psCommand], {
//           shell: true,
//           cwd: path,
//         })
//       case Shell.PowerShellCore:
//         const psCoreCommand = `"Set-Location -LiteralPath '${path}'"`
//         return spawn('START', ['pwsh', '-NoExit', '-Command', psCoreCommand], {
//           shell: true,
//           cwd: path,
//         })
//       case Shell.Hyper:
//         const hyperPath = `"${foundShell.path}"`
//         log.info(`launching ${shell} at path: ${hyperPath}`)
//         return spawn(hyperPath, [`"${path}"`], {
//           shell: true,
//           cwd: path,
//         })
//       case Shell.GitBash:
//         const gitBashPath = `"${foundShell.path}"`
//         log.info(`launching ${shell} at path: ${gitBashPath}`)
//         return spawn(gitBashPath, [`--cd="${path}"`], {
//           shell: true,
//           cwd: path,
//         })
//       case Shell.Cygwin:
//         const cygwinPath = `"${foundShell.path}"`
//         log.info(`launching ${shell} at path: ${cygwinPath}`)
//         return spawn(
//           cygwinPath,
//           [`/bin/sh -lc 'cd "$(cygpath "${path}")"; exec bash`],
//           {
//             shell: true,
//             cwd: path,
//           }
//         )
//       case Shell.WSL:
//         return spawn('START', ['wsl'], { shell: true, cwd: path })
//       case Shell.Cmd:
//         return spawn('START', ['cmd'], { shell: true, cwd: path })
//       case Shell.WindowTerminal:
//         const windowsTerminalPath = `"${foundShell.path}"`
//         log.info(`launching ${shell} at path: ${windowsTerminalPath}`)
//         return spawn(windowsTerminalPath, ['-d .'], { shell: true, cwd: path })
//       default:
//         return assertNever(shell, `Unknown shell: ${shell}`)
//     }
//   }
