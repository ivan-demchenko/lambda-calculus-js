const Y = f => (q => q(q))(x => f(y => x(x)(y)))

exports.Y = Y
