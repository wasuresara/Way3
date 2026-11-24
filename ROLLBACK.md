# Return to version 1.1.0

The stable version is git tag `v1.1.0-stable`. That tag points at main commit `80950e8` (the site after chair rental and Polish).

Prefer the Vercel buttons. They put the old build back on theway.berlin without changing git.

## In Vercel

These names are from Vercel’s docs for Instant Rollback and promoting a deployment.

1. Open the Vercel dashboard and the project **wayberlin3**.
2. Open **Deployments**.
3. Find the deployment whose commit is `80950e8`. Filtering the list to the `main` branch makes that easier.
4. Click the **⋮** menu on that row.
5. If this deployment used to be the live site, choose **Instant Rollback**, then **Continue** and **Confirm Rollback**.
6. If it is only a preview and you want it live, choose **Promote to Production**, then confirm **Promote to Production**.

Instant Rollback is the one to use after a later production deploy goes wrong. Promote to Production is for a preview that was never the live site.

On the Hobby plan, Instant Rollback only offers the immediately previous production deployment. On Pro and Enterprise you can pick an older one, including through **Choose another deployment** when it is shown.

After an Instant Rollback, Vercel stops sending new `main` deploys to the live domain until you promote a deployment again. The production tile then shows **Manage** for that.

Environment variables are not rebuilt by Instant Rollback. A rollback does not undo changes outside Vercel, such as the Google Sheet.

## With git

To look at this version on your computer:

```bash
git fetch origin tag v1.1.0-stable
git checkout v1.1.0-stable
```

To undo later commits while keeping history, add a new commit that reverses them. From an up-to-date `main`:

```bash
git revert --no-commit v1.1.0-stable..HEAD
git commit -m "Revert to v1.1.0-stable"
git push origin main
```

`git reset --hard v1.1.0-stable` moves the branch pointer back. Pushing that to `main` rewrites history. Use the Vercel rollback or `git revert` instead.
