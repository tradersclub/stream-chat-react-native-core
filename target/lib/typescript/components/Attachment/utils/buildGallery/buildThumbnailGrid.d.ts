import type { Attachment } from 'stream-chat';
import type { GallerySizeAndThumbnailGrid, GallerySizeConfig } from './types';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
/**
 * Builds a grid of thumbnail images from image attachments.
 * This function take a object parameter with following properties:
 *
 * @params
 *
 * - {number[][]} grid - Grid pattern of the gallery. Each numeric value in the array represents the flex value of corresponding image in grid.
 * - {Attachment[]} images - Array of image attachments.
 * - {GallerySizeConfig} sizeConfig - Theme config for the gallery.
 * - {boolean} invertedDirections - Whether to invert the direction of the grid. By default grid is rendered with column as primary direction and row as secondary direction.
 *
 * @usage
 *
 * ```
 * const { thumbnailGrid, invertedDirection } = buildThumbnailGrid({
 *  grid: [[1], [1]],
 *  images: [image1, image2],
 *  sizeConfig: {
 *    gridHeight: 200,
 *    gridWidth: 200,
 *    maxHeight: 200,
 *    maxWidth: 200,
 *    minHeight: 200,
 *    minWidth: 200,
 *  },
 * })
 *
 * Rendering logic on UI:
 *
 * ```
 * <View style={{ flexDirection: invertedDirection ? 'row' : 'column }}>
 * {
 *  thumbnailGrid.forEach(rows => {
 *    return (
 *      <View style={{ flexDirection: invertedDirection ? 'column' : 'row' }}>
 *       {
 *        rows.forEach(thumbnail => (
 *          <Image
 *            source={{ uri: thumbnail.url }}
 *            resizeMode={thumbnail.resizeMode}
 *            width={thumbnail.width}
 *            height={thumbnail.height}
 *          />
 *       ))}
 *      </View>
 *    )});
 * }
 * </View>
 * ```
 *
 * Lets look at different examples of grid and invertedDirections param:
 *
 * EXAMPLE 1:
 *
 * ```
 * {
 *  grid: [[2, 1], [2, 1]]
 *  invertedDirections: false
 * }
 * ```
 *
 * Resulting thumbnail grid on rendered UI:
 *
 *  __________________
 * |            |     |
 * |            |     |
 * |------------------|
 * |            |     |
 * |            |     |
 *  ------------------
 *
 * EXAMPLE 2:
 *
 * ```
 * {
 *  grid: [[2, 1], [2, 1]]
 *  invertedDirections: true
 * }
 * ```
 * Resulting thumbnail grid on rendered UI:
 *  __________________
 * |         |        |
 * |         |        |
 * |         |        |
 * |         |        |
 * |------------------|
 * |         |        |
 * |         |        |
 *  ------------------
 *
 * EXAMPLE 3:
 *
 * ```
 * {
 *  grid: [[2, 1]]
 *  invertedDirections: false
 * }
 * ```
 * Resulting thumbnail grid on rendered UI:
 *  __________________
 * |                  |
 * |                  |
 * |                  |
 * |                  |
 * |------------------|
 * |                  |
 * |                  |
 *  ------------------
 *
 * EXAMPLE 4:
 *
 * ```
 * {
 *  grid: [[2, 1]]
 *  invertedDirections: true
 * }
 * ```
 * Resulting thumbnail grid on rendered UI:
 *  __________________
 * |            |     |
 * |            |     |
 * |            |     |
 * |            |     |
 * |            |     |
 *  ------------------
 *
 * @return {GallerySizeAndThumbnailGrid}
 */
export declare function buildThumbnailGrid<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ grid, images, invertedDirections, sizeConfig, }: {
    grid: number[][];
    images: Attachment<StreamChatGenerics>[];
    invertedDirections: boolean;
    sizeConfig: GallerySizeConfig;
}): GallerySizeAndThumbnailGrid;
//# sourceMappingURL=buildThumbnailGrid.d.ts.map