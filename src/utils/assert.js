class Assert {
	/**
	 * { function_description }
	 *
	 * @param      {*}  condition  The condition
	 * @return     {Assert}
	 */
	static that(condition) {
		Assert.condition = condition;
		return Assert;
	}

	/**
	 * Verifies that assertion is true.
	 *
	 * @param      {*}   result  The result
	 * @return     {Assert}
	 */
	static is(result) {
		if (Assert.condition === undefined) {
			throw new Error('No condition to compare with this result');
		} else {
			const condition = Assert.condition;

			Assert.condition = undefined;
			if (condition === result) {
				return Assert;
			}
			throw new Error('Assert fail');
		}
	}

	/**
	 * Verifies that assertion is false.
	 *
	 * @param      {*}   result  The result
	 * @return     {Assert}
	 */
	static not(result) {
		if (Assert.condition === undefined) {
			throw new Error('No condition to compare with this result');
		} else {
			const condition = Assert.condition;

			Assert.condition = undefined;
			if (condition !== result) {
				return Assert;
			}
			throw new Error('Assert fail');
		}
	}
}

module.exports = Assert;
