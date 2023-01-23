import sanityClient from '@sanity/client'
import exportDataset from '@sanity/export'
import importDataset from '@sanity/import'
import fs from 'fs'
import {getCliClient} from 'sanity/cli'
import {template} from "./ixClient"

async function run() {
  // Get all 'template' documents that are not drafts
  const importClient = sanityClient({
    ...getCliClient().config(),
    token: process.env.SANITY_API_WRITE_TOKEN,
  }) 

  const {datasets, projectId, accessToken} = (await template()).sanity

  // Limitation: We can only do one dataset with Vercel integration, afaik
  // We just pick the first one for now
  for (const dataset of [datasets[0]]) {
    const exportClient = sanityClient({
      projectId,
      dataset,
      token: accessToken,
      useCdn: false,
      apiVersion: '2023-01-01',
    })
    console.log('Exporting template dataset', dataset)

    await exportDataset({
      client: exportClient,
      dataset,
      outputPath: `/tmp/${dataset}.tar.gz`,
      assets: true,
      drafts: true,
      assetConcurrency: 12,
    }).then((result) => {
      console.log('Importing into', importClient.config().dataset)
      return importDataset(fs.createReadStream(`/tmp/${dataset}.tar.gz`), {
        client: importClient,
        operation: 'createOrReplace',
      })
    })
  }
}

run()
