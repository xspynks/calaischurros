import { cpSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve('dist')
const root = resolve('..')

cpSync(resolve(dist, 'index.html'), resolve(root, 'index.html'))
cpSync(resolve(dist, 'favicon.svg'), resolve(root, 'favicon.svg'))
rmSync(resolve(root, 'assets'), { recursive: true, force: true })
cpSync(resolve(dist, 'assets'), resolve(root, 'assets'), { recursive: true })
